
JSX = node_modules/.bin/jsx
BROWSERIFY = node_modules/.bin/browserify
UGLIFY = node_modules/.bin/uglifyjs

all: dist/calendar.js dist/calendar.min.js

dist/calendar.js: src/calendar.js
	mkdir -p dist
	$(BROWSERIFY) -t reactify --standalone Calendar $< > $@

dist/calendar.min.js: dist/calendar.js
	$(UGLIFY) < $< > $@

clean:
	rm -rf dist

.PHONY: clean
