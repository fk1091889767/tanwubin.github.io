--- 
layout: post
title: 手机是如何注册到网络的？(LTE)
tags: 
- 通信教程
status: publish
type: post
published: true
---
总的流程如下图：

![](/upload/image/ue-attach.png)

第一条消息：Initial UE Message，包含如下6个项目：

``````
Internet Protocol Version 4, Src: 127.0.0.1, Dst: 127.0.0.20
Stream Control Transmission Protocol, Src Port: 54638 (54638), Dst Port: 36412 (36412)
S1 Application Protocol
    S1AP-PDU: initiatingMessage (0)
        initiatingMessage
            procedureCode: id-initialUEMessage (12)
            criticality: reject (0)
            value
                InitialUEMessage
                    protocolIEs: 6 items
                        Item 0: id-eNB-UE-S1AP-ID
                            ProtocolIE-Field
                                id: id-eNB-UE-S1AP-ID (8)
                                criticality: reject (0)
                                value
                                    ENB-UE-S1AP-ID: 420141
                        Item 1: id-NAS-PDU
                            ProtocolIE-Field
                                id: id-NAS-PDU (26)
                                criticality: reject (0)
                                value
                                    NAS-PDU: 1785e011b2030741020bf664f0610004010000000104f0f0...
                                    Non-Access-Stratum (NAS)PDU
                                        0001 .... = Security header type: Integrity protected (1)
                                        .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                        Message authentication code: 0x85e011b2
                                        Sequence number: 3
                                        0000 .... = Security header type: Plain NAS message, not security protected (0)
                                        .... 0111 = Protocol discriminator: EPS mobility management messages (0x7)
                                        NAS EPS Mobility Management Message Type: Attach request (0x41)
                                        0... .... = Type of security context flag (TSC): Native security context (for KSIasme)
                                        .000 .... = NAS key set identifier:  (0)
                                        .... 0... = Spare bit(s): 0x00
                                        .... .010 = EPS attach type: Combined EPS/IMSI attach (2)
                                        EPS mobile identity
                                        UE network capability
                                        ESM message container
                                        Tracking area identity - Last visited registered TAI
                                        DRX Parameter
                                        MS Network Capability
                                        TMSI Status
                                        Mobile station classmark 2
                                        Mobile station classmark 3
                                        Supported Codec List - Supported Codecs
                                        Voice Domain Preference and UE's Usage Setting
                                        GUTI type - Old GUTI type
                        Item 2: id-TAI
                            ProtocolIE-Field
                                id: id-TAI (67)
                                criticality: reject (0)
                                value
                                    TAI
                                        pLMNidentity: 64f061
                                        Mobile Country Code (MCC): China (460)
                                        Mobile Network Code (MNC): Unknown (16)
                                        tAC: 0001 (1)
                        Item 3: id-EUTRAN-CGI
                            ProtocolIE-Field
                                id: id-EUTRAN-CGI (100)
                                criticality: ignore (1)
                                value
                                    EUTRAN-CGI
                                        pLMNidentity: 64f061
                                        Mobile Country Code (MCC): China (460)
                                        Mobile Network Code (MNC): Unknown (16)
                                        cell-ID: 00e00000 [bit length 28, 4 LSB pad bits, 0000 0000  1110 0000  0000 0000  0000 .... decimal value 917504]
                        Item 4: id-RRC-Establishment-Cause
                            ProtocolIE-Field
                                id: id-RRC-Establishment-Cause (134)
                                criticality: ignore (1)
                                value
                                    RRC-Establishment-Cause: mo-Signalling (3)
                        Item 5: id-GUMMEI-ID
                            ProtocolIE-Field
                                id: id-GUMMEI-ID (75)
                                criticality: reject (0)
                                value
                                    GUMMEI
                                        pLMN-Identity: 64f061
                                        Mobile Country Code (MCC): China (460)
                                        Mobile Network Code (MNC): Unknown (16)
                                        mME-Group-ID: 0004
                                        mME-Code: 01
``````

---
