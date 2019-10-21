plugin.loadLang();

if(plugin.canChangeMenu()) 
{
	theWebUI.ffprobe = function( hash, no ) 
	{
		theWebUI.startConsoleTask( "ffprobe", plugin.name, { "hash": hash, "no": no }, { noclose: true } );
	}

	plugin.createFileMenu = theWebUI.createFileMenu;
	theWebUI.createFileMenu = function( e, id ) 
	{
		if(plugin.createFileMenu.call(this, e, id)) 
		{
			if(plugin.enabled) 
			{
//				theContextMenu.add([CMENU_SEP]);
				var fno = null;
				var table = this.getTable("fls");
				if((table.selCount == 1)  && (theWebUI.dID.length==40))
				{
					var fid = table.getFirstSelected();
					if(this.settings["webui.fls.view"])
					{
						var arr = fid.split('_f_');
						fno = arr[1];
					}
					else
					if(!this.dirs[this.dID].isDirectory(fid))
						fno = fid.substr(3);
				}
                console.log(theUILang);
                console.log('ffprobe:' + theUILang.ffprobe);
				theContextMenu.add( [theUILang.ffprobe,  (fno==null) ? null : "theWebUI.ffprobe('" + theWebUI.dID + "',"+fno+")"] );
			}
			return(true);
		}
		return(false);
	}
}