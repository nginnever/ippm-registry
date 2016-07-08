contract Registry {
    struct IPFS {
		string hash1;
		string hash2;
	}
	
	IPFS public entry;
	
    mapping (bytes32 => address) public owners;
    mapping (bytes32 => IPFS) public registry;

    modifier isOwner(bytes32 name)
    {
        if (msg.sender != owners[name]) throw;
        _
    }
  
    modifier isInit(bytes32 name)
    {
        if (owners[name] != 0x0) throw;
        _
    }
  
    function publish (bytes32 name, string hash1, string hash2) 
        isOwner(name) 
    {
        entry.hash1 = hash1;
        entry.hash2 = hash2;
        registry[name] = entry;
    }
  
    function init (bytes32 name, string hash1, string hash2)
        isInit(name)
    {
        owners[name] = msg.sender;
        entry.hash1 = hash1;
        entry.hash2 = hash2;
        registry[name] = entry;
    }
}