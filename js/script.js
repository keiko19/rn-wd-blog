var homeNode = <div class="homepage_body" style="display:none">
                </div>;
var homePage = React.createClass({
    render : function(){
        return (
            <div>
                <homeController />
                <toolBar style={} />
            </div>
        );
    }
});

var homeController = React.createClass({
    render : function(){
        return (
            <div>
                <navBar />
                <centerController style={} />
            </div>
        );
    }
});

var navBar = React.createClass({
    render : function(){
        return (
            <div>
                <clickType />
                <clickType />
            </div>
        );
    }
});

var centerController = React.createClass({
    render : function(){
        return (
            <div>
                <clickLeft />
                <clickRight />
                <slideList />
            </div>
        );
    }
});