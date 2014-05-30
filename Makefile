
JSX = node_modules/.bin/jsx
UGLIFY = node_modules/.bin/uglifyjs

all: dist/calendar.js dist/calendar.min.js

dist/calendar.js: src/calendar.js
	mkdir -p dist
	$(JSX) src/calendar.js > dist/calendar.js

dist/calendar.min.js: dist/calendar.js
	$(UGLIFY) < dist/calendar.js > dist/calendar.min.js

clean:
	rm -rf dist

.PHONY: clean
