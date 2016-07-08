contract Registry {
    mapping (bytes32 => address) public owners;
    mapping (bytes32 => bytes) public registry;

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
  
    function publish (bytes32 name, bytes hash) 
        isOwner(name) 
    {
        registry[name] = hash;
    }
  
    function init (bytes32 name, bytes hash)
        isInit(name)
    {
        owners[name] = msg.sender;
        registry[name] = hash;
    }
}