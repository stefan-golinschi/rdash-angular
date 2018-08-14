#!/bin/sh

systemctl status sshd | grep Active | awk '{printf $2 " " $3}'
