# !/usr/bin/env sh

set -e

make public > makelog.txt

jq -n "{ baseDir: \"public\" }"