sourcejs=$(shell find src -name "*.js")

node_modules: package-lock.json
	npm install
	touch node_modules
public: public/index.js
	touch public

public/index.js: $(sourcejs) node_modules rollup.config.js
	node_modules/.bin/rollup -c

artifacts/expedition.zip: public/style.css public/index.js public/index.html
	mkdir -p artifacts
	(cd public; zip ../artifacts/expedition.zip *)

artifacts: artifacts/expedition.zip
	touch artifacts

clean:
	rm -rf artifacts
	rm -rf node_modules
	rm -f public/index.js

.PHONY: clean