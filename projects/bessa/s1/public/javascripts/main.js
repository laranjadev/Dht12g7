export let getTag = (element) => { return window.document.getElementsByTagName(element); };

export let getSelector = (element) => { return window.document.querySelector(element); };

export let getSelectors = (element) => { return window.document.querySelectorAll(element); };

export let getName = (element) => { return window.document.getElementsByName(element); };

export let getClass = (element) => { return window.document.getElementsByClassName(element); };

export let getID = (element) => { return window.document.getElementById(element); };

export let createElement = (element) => { return window.document.createElement(element); };

export let getLang = () => { return window.document.documentElement.lang; };

export let addRemoveClasses = (object) => {
    for (let x = 0; x < object['elementList']['length']; x++) {
        for (let y = 0; y < getSelectors(object['elementList'][x])['length']; y++) {
            for (let z = 0; z < object['classeList']['length']; z++) {
                getSelectors(object['elementList'][x])[y]['classList'][object['method']](object['classeList'][z]);
            };
        };
    };
};