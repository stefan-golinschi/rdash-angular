#!/bin/sh
sensors | grep Core | head -n1 | awk '{ print $3 }'
