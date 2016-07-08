contract DoublyLinkedList {

    struct Element {
    	address previous;
    	address next;

    	bytes32 data;
    }

	uint size;
	address tail;
	address head;
	mapping(address => Elements) elements;

	function add(address key, bytes32 data) return (bool) {
		Element elem = elements[key];
		if(elem.data != ""){
			return false;
		}
		elem.data = data;
		      // Two cases - empty or not.
		if(size == 0){
			tail = key;
			head = key;
		} else {
			// Link
			elements[head].next = key;
			elem.previous = head;
			// Set this element as the new head.
			head = key;
		}
		// Regardless of case, increase the size of the list by one.
		size++;
		return true;
	}
}