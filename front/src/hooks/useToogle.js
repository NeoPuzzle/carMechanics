import { useState } from 'react';

const useToogle = (initialValue = false) => {
    const [visible, setVisible] = useState(initialValue);
    
    const toogle = () => setVisible((prev) => !prev);
    
    return [visible, toogle];
    
    };

    export default useToogle;
