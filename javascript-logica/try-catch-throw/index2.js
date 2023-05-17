try {
    // Trying to execute the code
    console.log('Opening file');
    console.log('Manipulating file');
    console.log(a);
    console.log('Closing file');
} catch (error) {
    console.log('Error found on trying to manipulate file');
} finally {
    console.log('I am always executed');
    console.log('Try to close file if try block is not able to do this');
}

function returnHours(date){
    if(date && !(date instanceof Date)){
        throw new TypeError('Expecting instance of Date')
    }

    if(!date) {
        date = new Date();
    }

    return date.toLocaleTimeString('en-UK', {
        hour12: false
    });
}

try {
    const date = new Date('01-01-1970 12:58:12');
    console.log(returnHours(date));        
} catch (error) {
    console.log('Treating if return some error');
} finally {
    console.log('Have a good day');
}

