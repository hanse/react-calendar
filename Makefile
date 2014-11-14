
JSX = node_modules/.bin/jsx
BROWSERIFY = node_modules/.bin/browserify
UGLIFY = node_modules/.bin/uglifyjs

all: docs/calendar.js

docs/calendar.js: docs/index.js src/*.js
	$(BROWSERIFY) -t [reactify --harmony] docs/index.js > $@

clean:
	rm -rf dist

test:
	mocha src/__tests__

.PHONY: clean
