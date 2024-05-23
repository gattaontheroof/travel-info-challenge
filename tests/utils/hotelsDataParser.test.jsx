import parseHotelsData from "../../src/utils/hotelsDataParser";


/* 
 * The Following Tests Were Generated using Copilot
 * This test is to check if the parseHotelsData function correctly parses the hotels data
 * returned from the API
 */
describe('parseHotelsData', () => {
    it('should parse hotels data correctly', () => {
        const data = {
            data: [
                {
                    title: 'Hotel 1',
                    primaryInfo: 'Info 1',
                    secondaryInfo: 'Info 2',
                    provider: 'Provider 1',
                    cardPhotos: [
                        {
                            sizes: {
                                urlTemplate: 'https://example.com/image1_{width}_{height}.jpg',
                            },
                        },
                    ],
                },
                // Add more sample data here if needed
            ],
        };

        const expectedOutput = [
            {
                title: 'Hotel 1',
                primaryInfo: 'Info 1',
                secondaryInfo: 'Info 2',
                provider: 'Provider 1',
                image: 'https://example.com/image1_600_400.jpg',
            },
            // Add expected output for more sample data here if needed
        ];

        const result = parseHotelsData(data);

        expect(result).toEqual(expectedOutput);
    });
});
