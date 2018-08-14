#!/bin/sh

MEM=`free -m | grep Mem | awk '{ print $2 }'`
echo  "${MEM}M"
