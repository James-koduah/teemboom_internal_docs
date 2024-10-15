function displayContent(id, navElem){
    for (let elem of document.getElementsByClassName('content_item')){
        elem.classList.remove('content_active')
    }
    let content = document.getElementById(id)
    content.classList.add('content_active')

    for (let elem of document.getElementsByClassName('sidebarItem')){
        elem.classList.remove('nav_active')
    }
    navElem.classList.add('nav_active')
}