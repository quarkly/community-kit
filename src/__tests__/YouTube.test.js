import { youtubeLinkParser } from '../YouTube';

describe('YouTube component', () => {
    it.concurrent.each([
        [
            'http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index',
            '0zM3nApSvMg',
        ],
        [
            'http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o',
            'QdK8U-VIH_o',
        ],
        [
            'http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0',
            '0zM3nApSvMg',
        ],
        ['http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s', '0zM3nApSvMg'],
        ['http://www.youtube.com/embed/0zM3nApSvMg?rel=0', '0zM3nApSvMg'],
        ['http://www.youtube.com/watch?v=0zM3nApSvMg', '0zM3nApSvMg'],
        ['http://youtu.be/0zM3nApSvMg', '0zM3nApSvMg'],
        ['https://www.youtube.com/watch?v=Of_ncEWRd2E', 'Of_ncEWRd2E'],
    ])('parse url %s correctly', async (url, videoId) => {
        const r = youtubeLinkParser(url);
        expect(r).toBe(videoId);
    });
});
