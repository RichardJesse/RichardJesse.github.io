fetchContext(['global'], 'UrgentContexts');
mediators(['StreamsPortal']);


const gc = context('global');
gc.root = h.dom.querySelector('#root');

route.orOn(['/', 'index', 'index.html'], function(){
    req('index');

    h.Index(
        {
            parent: gc.root,
            resetParent: route.reset
        }
    )
});




route.listen();