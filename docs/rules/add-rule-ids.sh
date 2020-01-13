#!/bin/bash

for file in *.md; do
	if [[ $file != "README.md" ]]; then
		ruleId=`echo $file | sed 's_\.md$__' | sed -r 's_(^|-)([a-z])_\U\2_g'`
		echo $ruleId
		version=`pcregrep -o1 "First seen in jSparrow version  \| \[(.*)\]" $file` 
		echo $version
		minJavaVersion=`pcregrep -o1 "Minimum Java version            \| ([^ ]*) " $file`
		echo $minJavaVersion
		remediationCost=`pcregrep -o1 "Remediation cost                \| ([^ ]*) " $file`
		echo $remediationCost
		links=`pcregrep -o1 "Links                           \| ([^ ]*) " $file`
		echo $links
		sed -i "3iruleId: $ruleId\nsince: $version\nminJavaVersion: $minJavaVersion\nremediationCost: $remediationCost\nlinks: \"$links\"" $file

	fi
	#exit 0
done
