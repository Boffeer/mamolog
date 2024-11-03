document.addEventListener('click', (event) => {

    if (event.target.closest('[data-tabs-nav]')) {
        const tabs = event.target.closest('[data-tabs]');
        const tabsNavs = tabs.querySelectorAll('[data-tabs-nav]');
        const tabsContent = tabs.querySelectorAll('[data-tabs-target]');
        const tabsPath = event.target.closest('[data-tabs-nav]').dataset.tabsNav;

        tabsNavs.forEach(elem => {
            elem.classList.remove('active');
        });
        tabsContent.forEach(elem => {
            elem.classList.remove('active');
        });
        tabs.querySelector(`[data-tabs-nav="${tabsPath}"]`).classList.add('active');
        tabs.querySelector(`[data-tabs-target="${tabsPath}"]`).classList.add('active');
    }
});

function tabSelect() {

    document.addEventListener('click', (event) => {
        if (event.target.closest('[data-select-toggle]')) {
            let selectContainer = event.target.closest('[data-select]');
            if (selectContainer.classList.contains('open')) {
                selectContainer.classList.remove('open');
            }
            else {
                selectClose();
                selectContainer.classList.add('open');
            }
        }
        else {
            if (!event.target.closest('[data-select-content]')) {
                selectClose();
            }
        }
        function selectClose() {
            document.querySelectorAll('[data-select]').forEach(el => {
                el.classList.remove('open');
            });
        }
    });

    document.addEventListener('click', (event) => {
        if (event.target.closest('[data-select-item]')) {
            console.log('select')
            const select        = event.target.closest('[data-select]')
            const selectActive  = select.querySelector('[data-select-active]')

            let selectItem= event.target.closest('[data-select-item]').innerHTML

            select.querySelectorAll('[data-select-item]').forEach(elem => {
                elem.classList.remove('active');
            });
            event.target.closest('[data-select-item]').classList.add('active')
            select.classList.remove('open')
            selectActive.innerHTML = selectItem
        }
    });
}

tabSelect()
