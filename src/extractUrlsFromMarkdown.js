import marked from 'marked';

export default (input) => {
    let renderer,
        urls;

    renderer = new marked.Renderer();
    urls = [];

    renderer.image = (href) => {
        urls.push(href);
    };

    renderer.link = (href) => {
        urls.push(href);
    };

    marked(input, {
        renderer
    });

    return urls;
};
