var sut = require('./like-widget'),
    sutExports = [
        {name: 'viewModel', type: 'object'},
        {name: 'synchronous', type: 'boolean'},
        {name: 'template', type: 'string'}
    ];

ko.components.register('like-widget', sut);

describe('like widget', function() {

    describe('export', function() {

        it('sut should have same keys as sutExports  ', function() {

            assert.equal(_.keys(sut).length, sutExports.length, 'Signature changed!');

        });

        // Parametrized tests
        _.each(sutExports, function( prop ) {

            it(prop.name, function() {

                assert.typeOf(sut[prop.name], prop.type);

            });

        });

    });

    describe('viewModel', function() {
        var params = {
                value: ko.observable('like')
            },
            vm = new sut.viewModel.createViewModel(params);

        it('vm.choosenValue should be \'like\'', function() {

            assert.equal(vm.chosenValue(), 'like');

        });
    });

    describe('template', function() {
        var fragment = $('<div></div>').html(sut.template);

        it('should have one div with class of ".result"', function() {

            console.log($('.result', fragment).length);
            assert.equal($('.result', fragment).length, 1);
        })
    })

});

