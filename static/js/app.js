/**
 * @function
 * @description Creates an <li> element with passed text content and returns it
 * @param {String} text The text content to insert into the new <li>
 */
function createRow(text) {
    var el = document.createElement('li');
    if (text) {
        var textEl = document.createTextNode(text);
        el.appendChild(textEl);
    }

    return el;
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('create-rows')) {
        // get data
        const rowCount = parseInt(e.target.getAttribute('data-row-count'), 10);
        const rowText = e.target.getAttribute('data-row-text');
        const parentID = e.target.getAttribute('data-row-parent');

        // get container element
        var container = document.getElementById(parentID);

        // clear it
        container.innerHTML = '';

        // loop data-row-count times
        for(var i=0;i<rowCount;i++) {
            // create row element
            const row = createRow(rowText);

            // insert row element into container element
            container.appendChild(row);
        }
    }
});
