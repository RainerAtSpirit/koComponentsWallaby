var sut = require('./like-widget'),
    fragment = require('raw!./testFragment.html'),
    sutExports = [
        {name: 'viewModel', type: 'object'},
        {name: 'synchronous', type: 'boolean'},
        {name: 'template', type: 'string'}
    ];

ko.components.register('like-widget', sut);

describe('like widget custom element', function() {

    $(fragment).appendTo('body');

    function Product ( name, rating ) {
        this.name = name;
        this.userRating = ko.observable(rating || null);
    }

    function MyViewModel () {
        this.products = [
            new Product('Garlic bread'),
            new Product('Milchbrötchen'),
            new Product('Seagull spaghetti', 'like') // This one was already 'liked'
        ];
    }

    ko.applyBindings(new MyViewModel());

    it('should have three li', function(){

        assert.equal($('ul li').length, 3);

    });

});
