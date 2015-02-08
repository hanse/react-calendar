
JSX = node_modules/.bin/jsx
BROWSERIFY = node_modules/.bin/browserify
UGLIFY = node_modules/.bin/uglifyjs

all: docs/bundle.js

docs/bundle.js: docs/index.js src/*.js
	$(BROWSERIFY) -t [reactify --harmony] docs/index.js > $@

clean:
	rm docs/bundle.js

test:
	mocha src/__tests__

.PHONY: test
