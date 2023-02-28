export default class PageTreeNode {
    static fromPages(pages) {
        return this._fromPages(pages);
    }

    static _fromPages(pages, rootID = 'root', baseURL = '') {
        const node = pages[rootID];

        const childNodes = node.children;

        const result = new PageTreeNode();

        result.id = node.id;
        result.name = node.name;
        result.pageUrl = node.pageUrl;
        result.absoluteUrl =
            rootID !== 'root' ? `${baseURL}/${node.pageUrl}` : '';

        if (childNodes) {
            result.children = childNodes.map((el) =>
                this._fromPages(pages, el, result.absoluteUrl)
            );
        }

        return result;
    }

    findSubtreeByUrl(url) {
        if (this.absoluteUrl === url) {
            return this;
        }
        if (this.children) {
            let result = null;
            this.children.some((el) => {
                result = el.findSubtreeByUrl(url);
                return result;
            });
            return result;
        }
        return null;
    }

    filterByPages(mode, pages) {
        switch (mode) {
            case 'exclude':
                this.children = this.children.flatMap((el) => {
                    if (pages.includes(el.absoluteUrl)) {
                        return [];
                    }
                    if (el.children) {
                        el = el.filterByPages(mode, pages);
                    }

                    return [el];
                });
                return this;
            case 'include':
                this.children = this.children.flatMap((el) => {
                    if (el.children) {
                        el = el.filterByPages(mode, pages);
                    }
                    if (
                        pages.includes(el.absoluteUrl) ||
                        el?.children?.length > 0
                    ) {
                        return [el];
                    }
                    return [];
                });
                return this;
            default:
                console.warn('Unexpected mode');
                return this;
        }
    }

    truncate(depth) {
        return this._trunc(depth, 0);
    }

    _trunc(depth, level = 0) {
        if (this.children) {
            this.children = this.children.flatMap((el) => {
                if (level >= depth) {
                    return [];
                }
                return [el._trunc(depth, level + 1)];
            });
        }
        return this;
    }
}
