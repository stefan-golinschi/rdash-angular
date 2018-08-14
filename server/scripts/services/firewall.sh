#!/bin/sh

systemctl status firewalld | grep Active | awk '{printf $2 " " $3}'
