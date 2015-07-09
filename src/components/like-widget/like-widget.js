var template = require('raw!./like-widget.html');

function LikeDislike ( params ) {
    // Data: value is either null, 'like', or 'dislike'
    this.chosenValue = params.value;

    // Behaviors
    this.like = function() {
        this.chosenValue('like');
    }.bind(this);

    this.dislike = function() {
        this.chosenValue('dislike');
    }.bind(this);
}

function createViewModel ( params, componentInfo ) {

    return new LikeDislike(params);
}

module.exports = {
    viewModel: {
        createViewModel: createViewModel
    },
    synchronous: true,
    template: template
};
