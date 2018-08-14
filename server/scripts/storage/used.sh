#!/bin/sh

DIR=$1

if [ ! -d "$DIR" ]; then
	exit 2
fi

df -h $DIR | awk '{ print $3 }' | tail -n 1
