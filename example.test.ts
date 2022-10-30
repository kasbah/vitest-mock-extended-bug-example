import { describe, test, expect } from "vitest";
import { mock, MockProxy } from "vitest-mock-extended";

interface PartyProvider {
    getPartyType: () => string;
    getSongs: (type: string) => string[];
    start: (type: string) => void;
}

describe("Party Tests", () => {
    test("Mock out an interface", () => {
        const party: MockProxy<PartyProvider> = mock<PartyProvider>();
        party.start("disco party");

        expect(party.start.calls.length).toBe(1);
    });
});
