
JSX = node_modules/.bin/jsx
UGLIFY = node_modules/.bin/uglifyjs

all: dist/calendar.js dist/calendar.min.js

dist/calendar.js: src/calendar.js
	mkdir -p dist
	$(JSX) $< > $@

dist/calendar.min.js: dist/calendar.js
	$(UGLIFY) < $< > $@

clean:
	rm -rf dist

.PHONY: clean
