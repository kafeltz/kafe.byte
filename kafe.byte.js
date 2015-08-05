function humanize_file_size( bytes )
{
	var kbyte = 1024;
	var mbyte = kbyte * 1024;
    var gbyte = mbyte * 1024;

	// format to mbyte
    if (bytes >= gbyte)
    {
        return (bytes / gbyte).toFixed(1).replace(".", ",") + "Gb";
    }
	else if (bytes >= mbyte)
	{
		return (bytes / mbyte).toFixed(1).replace(".", ",") + "Mb";
	}
	// format to kbyte
	else
	{
		return (bytes / kbyte).toFixed(1).replace(".", ",")	 + "Kb";
	}
}