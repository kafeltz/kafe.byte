function humanize_file_size( bytes )
{
	var kbyte = 1024;
	var mbyte = kbyte * 1024;

	// format to mbyte
	if (bytes >= mbyte)
	{
		return (bytes / mbyte).toFixed(1).replace(".", ",") + "Mb";
	}
	// format to kbyte
	else
	{
		return (bytes / kbyte).toFixed(1).replace(".", ",")	 + "Kb";
	}
}

// console.info( humanize_file_size( 984064 ) );
// console.info( humanize_file_size( 3884 ) );
// console.info( humanize_file_size( 32255 ) );
// console.info( humanize_file_size( 16045 ) );
// console.info( humanize_file_size( 2250 ) );
// console.info( humanize_file_size( 9173510 ) );
