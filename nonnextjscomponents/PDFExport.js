import React, { useState, useEffect } from 'react';
import ReactPDF, { PDFViewer, Page, Text, View, Document, StyleSheet, Image, } from '@react-pdf/renderer';
import { borderColor } from '@mui/system';

export default function PDFExport(props) {

    const tabsData = props.tabdata;
    const WCAGLevels = props.WCAGLevels;

    return (

        <Document>
            <Page size="A4" style={styles.page}>

                {tabsData.map((elem, i) => (

                    <View key={"section_" + i} style={styles.section}>

                        {tabsData[i].subReport.map((e, j) => (

                            <View key={"sectionView_" + j}>

                                <View style={styles.topSection}>
                                    <View style={styles.boxColor}>
                                        <View style={[styles.boxItem, { backgroundColor: e.isDefault ? e.primaryColorValue : elem.colorValue }]}>
                                        </View>
                                        <View style={styles.boxTextView}>
                                            <Text style={styles.boxText}>background color {e.isDefault ? e.primaryColorValue : elem.colorValue}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.boxColor}>
                                        <View style={[styles.boxItem, { backgroundColor: e.compareColorValue }]}>
                                        </View>
                                        <View style={styles.boxTextView}>
                                            <Text style={styles.boxText}>text color {e.compareColorValue}</Text>
                                        </View>
                                    </View>

                                </View>

                                <View style={styles.sectionView}>

                                    <View style={styles.sectionLeftView}>
                                        <View style={styles.contenView}>

                                            <View style={styles.topBoxSection}>

                                                <View style={styles.normalTextView}>
                                                    <Text style={styles.normalText}>Normal text</Text>
                                                </View>

                                                <View style={styles.wcagSection}>
                                                    <View style={styles.wcagLevel}>

                                                        {WCAGLevels.aa ?
                                                            <View style={styles.wcagAA}>
                                                                <Text style={styles.wcagAAText}>WCAG AA</Text>

                                                                {(e.wcagLevelPassStatusList.length > 0 && e.wcagLevelPassStatusList[0].aa === true) ?
                                                                    <Image src={'../check.png'} style={styles.wcagAAImg} />
                                                                    :
                                                                    <Image src={'../uncheck.png'} style={styles.wcagAAImg} />
                                                                }

                                                            </View> : null
                                                        }

                                                        {WCAGLevels.aaa ?
                                                            <View style={styles.wcagAAA}>
                                                                <Text style={styles.wcagAAText}>WCAG AAA</Text>
                                                                {(e.wcagLevelPassStatusList.length > 0 && e.wcagLevelPassStatusList[0].aaa === true) ?
                                                                    <Image src={'../check.png'} style={styles.wcagAAImg} />
                                                                    :
                                                                    <Image src={'../uncheck.png'} style={styles.wcagAAImg} />
                                                                }
                                                            </View> : null
                                                        }

                                                    </View>

                                                </View>

                                            </View>

                                            <View style={[styles.boxContentSection, { backgroundColor: e.isDefault ? e.primaryColorValue : elem.colorValue }]}>
                                                <Text style={[styles.boxContentText, { fontSize: 9, color: e.compareColorValue }]}>A high color contrast makes anything easier to read for 17pt and below</Text>
                                            </View>

                                        </View>

                                        <View style={styles.contenView}>

                                            <View style={styles.topBoxSection}>

                                                <View style={styles.normalTextView}>
                                                    <Text style={styles.normalText}>Graphical Objects And UI Component</Text>
                                                </View>

                                                <View style={styles.wcagSection}>
                                                    <View style={styles.wcagLevel}>


                                                        {WCAGLevels.aa ?
                                                            <View style={styles.wcagAA}>
                                                                <Text style={styles.wcagAAText}>WCAG AA</Text>

                                                                {(e.wcagLevelPassStatusList.length > 0 && e.wcagLevelPassStatusList[2].aa === true) ?
                                                                    <Image src={'../check.png'} style={styles.wcagAAImg} />
                                                                    :
                                                                    <Image src={'../uncheck.png'} style={styles.wcagAAImg} />
                                                                }

                                                            </View> : null
                                                        }

                                                        {WCAGLevels.aaa ?
                                                            <View style={styles.wcagAAA}>
                                                                <Text style={styles.wcagAAText}>WCAG AAA</Text>
                                                                {(e.wcagLevelPassStatusList.length > 0 && e.wcagLevelPassStatusList[2].aaa === true) ?
                                                                    <Image src={'../check.png'} style={styles.wcagAAImg} />
                                                                    :
                                                                    <Image src={'../uncheck.png'} style={styles.wcagAAImg} />
                                                                }
                                                            </View> : null
                                                        }

                                                    </View>

                                                </View>

                                            </View>

                                            <View style={[styles.graphicalObjectView, { backgroundColor: e.isDefault ? e.primaryColorValue : elem.colorValue }]}>
                                                <View style={styles.graphicalShadesView}>
                                                    <View style={[styles.graphicalRoundView, { backgroundColor: e.compareColorValue }]}></View>
                                                    <View style={[styles.graphicalScourView, { backgroundColor: e.compareColorValue }]}></View>
                                                    <View style={[styles.graphicalTriangleView, { borderBottomColor: e.compareColorValue, borderLeftColor: e.isDefault ? e.primaryColorValue : elem.colorValue, borderRightColor: e.isDefault ? e.primaryColorValue : elem.colorValue, }]}></View>
                                                </View>

                                                <View style={[styles.graphicalTextView, { borderColor: e.compareColorValue }]}>
                                                    <Text style={[styles.graphicalText, { color: e.compareColorValue }]}>A high color contrast makes anything easier to read for 17pt and below</Text>
                                                </View>

                                            </View>

                                        </View>

                                        <View style={styles.contenView}>

                                            <View style={styles.topBoxSection}>

                                                <View style={styles.normalTextView}>
                                                    <Text style={styles.normalText}>Link Contrast Checks</Text>
                                                </View>

                                                <View style={styles.wcagSection}>
                                                    <View style={styles.wcagLevel}>

                                                        {WCAGLevels.aa ?
                                                            <View style={styles.wcagAA}>
                                                                <Text style={styles.wcagAAText}>WCAG AA</Text>

                                                                {(e.wcagLevelPassStatusList.length > 0 && e.wcagLevelPassStatusList[4].aa === true) ?
                                                                    <Image src={'../check.png'} style={styles.wcagAAImg} />
                                                                    :
                                                                    <Image src={'../uncheck.png'} style={styles.wcagAAImg} />
                                                                }

                                                            </View> : null
                                                        }

                                                        {WCAGLevels.aaa ?
                                                            <View style={styles.wcagAAA}>
                                                                <Text style={styles.wcagAAText}>WCAG AAA</Text>
                                                                {(e.wcagLevelPassStatusList.length > 0 && e.wcagLevelPassStatusList[4].aaa === true) ?
                                                                    <Image src={'../check.png'} style={styles.wcagAAImg} />
                                                                    :
                                                                    <Image src={'../uncheck.png'} style={styles.wcagAAImg} />
                                                                }
                                                            </View> : null
                                                        }

                                                    </View>

                                                </View>

                                            </View>

                                            <View style={styles.linkSection}>

                                                <View style={styles.linkColorSection}>

                                                    <View style={[styles.linkColorView, { backgroundColor: e.isDefault ? e.primaryColorValue : elem.colorValue, }]} />

                                                    <View style={styles.linkTextView}>
                                                        <Text style={styles.linkText}>{elem.colorValue} Text Color</Text>
                                                    </View>

                                                </View>
                                                <View style={styles.linkColorSection}>

                                                    <View style={[styles.linkColorView, { backgroundColor: e.compareColorValue }]} />

                                                    <View style={styles.linkTextView}>
                                                        <Text style={styles.linkText}>{e.compareColorValue} Link Color</Text>
                                                    </View>

                                                </View>
                                                <View style={styles.linkColorSection}>

                                                    <View style={styles.linkColorView} />

                                                    <View style={styles.linkTextView}>
                                                        <Text style={styles.linkText}>#FFFFFF Background Color</Text>
                                                    </View>

                                                </View>

                                            </View>

                                        </View>

                                        <View style={styles.contenView}>

                                            <View style={styles.lastLinkView}>
                                                <Text style={[styles.lastLinkViewText, { color: e.isDefault ? e.primaryColorValue : elem.colorValue, }]}>Lorem Ipsum is simply dummy <Text style={[styles.lastLinkColorText, { color: e.compareColorValue }]}>Link</Text> of the printing and typesetting industry</Text>
                                            </View>

                                        </View>
                                    </View>

                                    <View style={styles.sectionRightView}>

                                        <View style={styles.contenView}>

                                            <View style={styles.topBoxSection}>

                                                <View style={styles.normalTextView}>
                                                    <Text style={styles.normalText}>Large text</Text>
                                                </View>

                                                <View style={styles.wcagSection}>
                                                    <View style={styles.wcagLevel}>

                                                        {WCAGLevels.aa ?
                                                            <View style={styles.wcagAA}>
                                                                <Text style={styles.wcagAAText}>WCAG AA</Text>

                                                                {(e.wcagLevelPassStatusList.length > 0 && e.wcagLevelPassStatusList[1].aa === true) ?
                                                                    <Image src={'../check.png'} style={styles.wcagAAImg} />
                                                                    :
                                                                    <Image src={'../uncheck.png'} style={styles.wcagAAImg} />
                                                                }

                                                            </View> : null
                                                        }

                                                        {WCAGLevels.aaa ?
                                                            <View style={styles.wcagAAA}>
                                                                <Text style={styles.wcagAAText}>WCAG AAA</Text>
                                                                {(e.wcagLevelPassStatusList.length > 0 && e.wcagLevelPassStatusList[1].aaa === true) ?
                                                                    <Image src={'../check.png'} style={styles.wcagAAImg} />
                                                                    :
                                                                    <Image src={'../uncheck.png'} style={styles.wcagAAImg} />
                                                                }
                                                            </View> : null
                                                        }

                                                    </View>

                                                </View>

                                            </View>

                                            <View style={[styles.boxContentSection, { backgroundColor: e.isDefault ? e.primaryColorValue : elem.colorValue, }]}>
                                                <Text style={[styles.boxContentText, { color: e.compareColorValue }]}>A high color contrast makes anything easier to read for 18pt and above / 14pt bold and above</Text>
                                            </View>

                                        </View>

                                        <View style={styles.contenView}>

                                            <View style={styles.topBoxSection}>

                                                <View style={styles.normalTextView}>
                                                    <Text style={styles.normalText}>Button Components</Text>
                                                </View>

                                                <View style={styles.wcagSection}>
                                                    <View style={styles.wcagLevel}>

                                                        {WCAGLevels.aa ?
                                                            <View style={styles.wcagAA}>
                                                                <Text style={styles.wcagAAText}>WCAG AA</Text>

                                                                {(e.wcagLevelPassStatusList.length > 0 && e.wcagLevelPassStatusList[3].aa === true) ?
                                                                    <Image src={'../check.png'} style={styles.wcagAAImg} />
                                                                    :
                                                                    <Image src={'../uncheck.png'} style={styles.wcagAAImg} />
                                                                }

                                                            </View> : null
                                                        }

                                                        {WCAGLevels.aaa ?
                                                            <View style={styles.wcagAAA}>
                                                                <Text style={styles.wcagAAText}>WCAG AAA</Text>
                                                                {(e.wcagLevelPassStatusList.length > 0 && e.wcagLevelPassStatusList[3].aaa === true) ?
                                                                    <Image src={'../check.png'} style={styles.wcagAAImg} />
                                                                    :
                                                                    <Image src={'../uncheck.png'} style={styles.wcagAAImg} />
                                                                }
                                                            </View> : null
                                                        }

                                                    </View>

                                                </View>

                                            </View>

                                            <View style={[styles.buttonSection, { borderColor: e.isDefault ? e.primaryColorValue : elem.colorValue, }]}>

                                                <View style={[styles.buttonBackground, { backgroundColor: e.isDefault ? e.primaryColorValue : elem.colorValue, }]}>
                                                    <View style={[styles.buttonBtn, { borderColor: e.compareColorValue }]}>
                                                        <Text style={[styles.buttonBtnText, { color: e.compareColorValue }]}>Button</Text>
                                                    </View>
                                                    <View style={[styles.buttonBtn, { borderRadius: 3, borderColor: e.compareColorValue }]}>
                                                        <Text style={[styles.buttonBtnText, { color: e.compareColorValue }]}>Button</Text>
                                                    </View>
                                                </View>

                                                <View style={styles.buttonWithOutBackground}>

                                                    <View style={[styles.buttonOutLineBtn, { borderColor: e.isDefault ? e.primaryColorValue : elem.colorValue, backgroundColor: e.isDefault ? e.primaryColorValue : elem.colorValue, }]}>
                                                        <Text style={[styles.buttonOutLineBtnText, { color: e.compareColorValue }]}>Button</Text>
                                                    </View>
                                                    <View style={[styles.buttonOutLineBtn, { borderRadius: 3, borderColor: e.isDefault ? e.primaryColorValue : elem.colorValue, backgroundColor: e.isDefault ? e.primaryColorValue : elem.colorValue, }]}>
                                                        <Text style={[styles.buttonOutLineBtnText, { color: e.compareColorValue }]}>Button</Text>
                                                    </View>

                                                </View>

                                            </View>

                                        </View>

                                    </View>

                                </View>
                            </View>
                        ))}

                    </View>

                ))}


            </Page>
        </Document>
    );
}

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    sectionView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 780,
    },
    sectionLeftView: {
        width: '50%',
        paddingRight: 5,
    },
    sectionRightView: {
        width: '50%',
        paddingLeft: 5,
    },
    contenView: {
        flexDirection: 'column',
    },
    topBoxSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 10,
    },
    normalTextView: {
        flex: 1,
    },
    normalText: {
        fontSize: 7,
        textTransform: 'uppercase',
    },
    wcagLevel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    wcagAA: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    wcagAAA: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },
    wcagAAImg: {
        width: 10,
        height: 10,
        borderRadius: 50,
    },
    wcagAAText: {
        fontSize: 6,
        paddingRight: 5,
    },
    boxContentSection: {
        backgroundColor: '#000000',
        borderRadius: 3,
        justifyContent: 'center',
        paddingHorizontal: 20,
        height: 40,
    },
    boxContentText: {
        color: '#ffffff',
        fontSize: 10,
    },
    graphicalObjectView: {
        flexDirection: 'column',
        backgroundColor: '#000000',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 3,
    },
    graphicalShadesView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    graphicalRoundView: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#ffffff',
    },
    graphicalScourView: {
        width: 40,
        height: 40,
        backgroundColor: '#ffffff',
        marginHorizontal: 10,
    },
    graphicalTriangleView: {
        width: 40,
        height: 40,
        borderLeft: 20,
        borderRight: 20,
        borderBottom: 40,
        borderLeftColor: '#000000',
        borderRightColor: '#000000',
        borderBottomColor: '#ffffff',
    },
    graphicalTextView: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#fff',
        color: '#000000',
        fontSize: 9,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20,
    },
    linkSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    linkColorSection: {
        flexDirection: 'row',
        paddingRight: 10,
    },
    linkColorView: {
        width: 40,
        height: 30,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 4,
    },
    linkTextView: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: 35,
    },
    linkText: {
        color: '#000000',
        fontSize: 6,
        paddingLeft: 4,
    },
    lastLinkView: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 3,
    },
    lastLinkViewText: {
        color: '#000000',
        fontSize: 9,
    },
    lastLinkColorText: {
        color: 'red',
        textDecoration: 'underline',
    },
    buttonSection: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 3,
        flexDirection: 'row',
    },
    buttonBackground: {
        backgroundColor: '#000000',
        paddingVertical: 20,
        flex: 1,
        paddingHorizontal: 20,
    },
    buttonBtn: {
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        textAlign: 'center',
        marginVertical: 5,
    },
    buttonBtnText: {
        color: '#ffffff',
        fontSize: 8,
    },
    buttonWithOutBackground: {
        backgroundColor: '#ffffff',
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    buttonOutLineBtn: {
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#000000',
        textAlign: 'center',
        marginVertical: 5,

    },
    buttonOutLineBtnText: {
        color: '#000000',
        fontSize: 8,
    },
    topSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#a5a4a4',
        paddingBottom: 10,
        marginBottom: 5,
    },
    boxColor: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 110,
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 4,
        paddingHorizontal: 6,
        marginRight: 10,
    },
    boxItem: {
        width: 30,
        height: 30,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#000000',
    },
    boxTextView: {
        flex: 1,
        paddingLeft: 5,
    },
    boxText: {
        fontSize: 8,
        color: '#000000',
        textTransform: 'uppercase',
    }
});