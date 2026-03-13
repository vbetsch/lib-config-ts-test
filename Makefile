# Variables
ref_lib := github:vbetsch/lib-config-ts
dev_branch := 16-optimize-dependencies

# Commands
update-dependencies:
	rm -rf ./package-lock.json ./node_modules/
	npm install

update-lib-dev:
	npm install "$(ref_lib)#$(dev_branch)"

update-lib-prod:
	npm install $(ref_lib)

update-tsconfig-build:
	rm -rf ./dist/
	npm run tsconfig:build

.PHONY: update-dependencies update-lib-dev update-lib-prod update-tsconfig-build

# Aliases
upddeps: update-dependencies

.PHONY: upddeps
