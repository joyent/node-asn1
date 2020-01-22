// Type definitions for asn1 0.2
// Project: https://github.com/evs-broadcast/node-asn1
// Definitions by: Gilles Dufour <https://github.com/dufourgilles/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
/// <reference types="node" />

export interface WriterOptions {
        size: number,
        growthFactor: number
}

export class Reader {
    readonly buffer: Buffer;
    readonly offset: number;
    readonly _blocklevel: number;
    readonly _blockInfo: object;
    readonly length: number;
    readonly remain: number;
    readonly _buf: Buffer;
    _size: number;
    _offset: number;

    constructor(data: Buffer);

    peek(): number | null;
    readBlock(offset: number): number;
    readBoolean(): boolean;
    readByte(peek: boolean): number | null;
    readEnumeration(): number;
    readInt(): number;
    readLength(offset?: number): number;
    readOID(tag?: number): string;
    readRelativeOID(tag?: number): string;
    readSequence(tag?: number): number | null;
    readString(tag?: number): string;
    readString(tag: number, retbuf: boolean): Buffer;
    _readTag(tag?: number): number;
}

export class Writer {
    readonly buffer: Buffer;
    readonly _buf: Buffer;
    readonly _size: number;
    _offset: number;

    constructor(options?: WriterOptions);

    endSequence(): void;
    startSequence(tag?: number): void;
    writeBoolean(b: boolean, tag?: number): void;
    writeBuffer(buf: Buffer, tag: number): void;
    writeByte(b: number): void;
    writeEnumeration(i: number, tag?: number): void;
    writeInt(i: number, tag?: number): void;
    writeLength(len: number): void;
    writeNull(): void;
    writeOID(s: string, tag: number): void;
    writeRelativeOID(s: string,tag: number): void;
    writeString(s: string, tag?: number): void;
    writeStringArray(strings: ReadonlyArray<string>): void;
    _ensure(length: number): void;
}

export namespace Ber {
    const BMPString: number;
    const BitString: number;
    const Boolean: number;
    const CharacterString: number;
    const Constructor: number;
    const Context: number;
    const EOC: number;
    const Enumeration: number;
    const External: number;
    const GeneralString: number;
    const GeneralizedTime: number;
    const GraphicString: number;
    const IA5String: number;
    const Integer: number;
    const Null: number;
    const NumericString: number;
    const OID: number;
    const ObjectDescriptor: number;
    const OctetString: number;
    const PDV: number;
    const PrintableString: number;
    const Real: number;
    const RelativeOID: number;
    const Sequence: number;
    const Set: number;
    const T61String: number;
    const UTCTime: number;
    const UniversalString: number;
    const Utf8String: number;
    const VideotexString: number;
    const VisibleString: number;
}
/*
declare enum BerType {
  EOC = 0,
  Boolean = 1,
  Integer = 2,
  BitString = 3,
  OctetString = 4,
  Null = 5,
  OID = 6,
  ObjectDescriptor = 7,
  External = 8,
  Real = 9, // float
  Enumeration = 10,
  PDV = 11,
  Utf8String = 12,
  RelativeOID = 13,
  Sequence = 16,
  Set = 17,
  NumericString = 18,
  PrintableString = 19,
  T61String = 20,
  VideotexString = 21,
  IA5String = 22,
  UTCTime = 23,
  GeneralizedTime = 24,
  GraphicString = 25,
  VisibleString = 26,
  GeneralString = 28,
  UniversalString = 29,
  CharacterString = 30,
  BMPString = 31,
  Constructor = 32,
  Context = 128,
}

*/
