import { describe, test, expect } from 'vitest';
import kelvinToCelsius from "../../src/utils/temperatureFormatter";

describe('temperature formatter test suite', () => {

    test('should correctly format temperature', () => {

        const result = kelvinToCelsius(290);
        expect(result).toEqual('17°C');

    });

});