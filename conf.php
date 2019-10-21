<?php

if(empty($pathToExternals['ffprobe']))	// May be path already defined?
{
	$pathToExternals['ffprobe'] = '';	// Something like /usr/bin/ffprobe. If empty, will be found in PATH.
}
