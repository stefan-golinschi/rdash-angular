#!/bin/sh

MEM=`free -m | grep Mem | awk '{ print $5 }'`
echo  "${MEM}M"
