SHELL := /bin/bash

PWD := $(shell pwd)

.PHONY: npm
npm:
	@echo "Install node packages"
	npm install

.PHONY: typescript
webpack:
	@echo "Transpile typescript"
	$(PWD)/node_modules/.bin/webpack

webpack-watch:
	@echo "Transpile typescript (watching for changes)"
	$(PWD)/node_modules/.bin/webpack --watch

.PHONY: karma
karma:
	@echo "Run karma tests"
	$(PWD)/node_modules/.bin/karma start karma.conf.js --single-run --no-auto-watch --reporters dots

.PHONY: lint
lint:
	echo "Run tslint"
	node $(PWD)/node_modules/.bin/tslint --config $(PWD)/node_modules/tslint-rules/tslint.json --project $(PWD)/tsconfig.json

generate-checkstyle:
	node $(PWD)/node_modules/.bin/tslint --config $(PWD)/node_modules/tslint-rules/tslint.json --project $(PWD)/tsconfig.json --format checkstyle --out ./tslint-checkstyle.xml

setup: npm webpack

clean:
	@echo "Remove node_modules and transpiled javascript files"
	rm -rf $(PWD)/node_modules
	cd $(PWD)/dist && rm *
	rm -rf coverage
