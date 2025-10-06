// React and core dependencies
import * as React from "react";
import _, { Locale } from "@/i18n/locale";

// Layout components - main page structure
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import Header from "@/atomic/organism/header";
import ScrollButton from "../atom/scroll-button";

// Content components - reusable UI elements
import ImageI18N from "@/atomic/atom/img-i18n";
import CallToAction from "@/atomic/organism/call-to-action-new";
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import TitleTextCard from "@/atomic/molecule/title-text-card";
import BulletList from "@/atomic/molecule/bullet-list";
import Review from "@/atomic/prototype/review";

// Services
import { getAppId } from "@/service/AppleService";

/**
 * Emotion Page Component
 * 
 * This page showcases emotional wellness tools and features including:
 * - Color psychology tests
 * - Biorhythm calculations
 * - Personality trait assessments
 * - App download sections with advantages
 */
export default function Emotion() {
    // Get app ID for App Store links (platform detection)
    const appId = getAppId();
    
    // Configuration for app advantages section - highlights key features
    const advantages: Array<IconTitleText> = [
        {
            // Advantage 1: Security/Privacy feature
            icon: {
                src: "/img/atom/icons/icon-defense.svg",
                alt: _("EMOTION.ALT5_1"),
            },
            title: _("EMOTION.LIST5.LI1_HEAD"),
            subtitle: _("EMOTION.LIST5.LI1_TEXT"),
        },
        {
            // Advantage 2: Data synchronization feature
            icon: {
                src: "/img/atom/icons/icon-sync.svg",
                alt: _("EMOTION.ALT5_2"),
            },
            title: _("EMOTION.LIST5.LI2_HEAD"),
            subtitle: _("EMOTION.LIST5.LI2_TEXT"),
        },
        {
            // Advantage 3: No authentication required
            icon: {
                src: "/img/atom/icons/icon-no-auth.svg",
                alt: _("EMOTION.ALT5_3"),
            },
            title: _("EMOTION.LIST5.LI3_HEAD"),
            subtitle: _("EMOTION.LIST5.LI3_TEXT"),
        },
        {
            // Advantage 4: Ad-free experience
            icon: {
                src: "/img/atom/icons/icon-no-ads.svg",
                alt: _("EMOTION.ALT5_4"),
            },
            title: _("EMOTION.LIST5.LI4_HEAD"),
            subtitle: _("EMOTION.LIST5.LI4_TEXT"),
        },
    ];

    return (
        <>
            {/* Main navigation bar */}
            <NavigationBar />

            {/* Main page container with emotion-specific styling */}
            <div className="ms-base-page emotion">
                {/* Hero section with page title, description and app download */}
                <Header
                    title={_("EMOTION.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("EMOTION.DWN")}
                    imgSrc="/img/page/emotion/emotion-header-img-en.webp"
                    imgAlt={_("EMOTION.IMG")}
                    imgH={405}
                    imgW={550}
                >
                    {/* Header content: bullet points about emotion features */}
                    <div className="emotion">
                        <ul className="header-content-list">
                            <li>{_("EMOTION.ABOUT_1")}</li>
                            <li>{_("EMOTION.ABOUT_2")}</li>
                            <li>{_("EMOTION.ABOUT_3")}</li>
                        </ul>
                    </div>
                </Header>

                {/* Section 1: Feature cards grid layout */}
                <section>
                    <div className="row g-4">
                        {/* Large feature card - Purple background */}
                        <TitleTextCard
                            title={_("EMOTION.LIST1.LI1_HEAD")}
                            text={_("EMOTION.LIST1.LI1_TEXT")}
                            bgColor="#EDE1FF"
                            className="col-lg-8 col-md-6"
                        />
                        {/* Small feature card - Yellow background */}
                        <TitleTextCard
                            title={_("EMOTION.LIST1.LI2_HEAD")}
                            text={_("EMOTION.LIST1.LI2_TEXT")}
                            bgColor="#FFF9E3"
                            className="col-lg-4 col-md-6"
                        />
                        {/* Large feature card - Purple background (reordered on mobile) */}
                        <TitleTextCard
                            title={_("EMOTION.LIST1.LI3_HEAD")}
                            text={_("EMOTION.LIST1.LI3_TEXT")}
                            bgColor="#EDE1FF"
                            className="col-lg-8 col-md-6 order-md-4"
                        />
                        {/* Small feature card - Yellow background */}
                        <TitleTextCard
                            title={_("EMOTION.LIST1.LI4_HEAD")}
                            text={_("EMOTION.LIST1.LI4_TEXT")}
                            bgColor="#FFF9E3"
                            className="col-lg-4 col-md-6"
                        />
                    </div>
                </section>

                {/* Section 2: Color Test Feature - Text + Image layout */}
                <section>
                    <div className="row">
                        {/* Left column: Color test description and CTA button */}
                        <div className="col-lg-6">
                            <h2>{_("EMOTION.HEAD1")}</h2>
                            <p>{_("EMOTION.DESK1")}</p>
                            <a href={Locale.i18nLink("emotion/color-test")} className="ms-btn-large">
                                {_("EMOTION.BTN1")}
                            </a>
                        </div>
                        {/* Right column: Screenshot of color test app */}
                        <div className="col-lg-6">
                            <ImageI18N
                                src="/img/page/emotion/emotion-screen-april-en.webp"
                                w={512}
                                h={598}
                                cls="ms-base-image mt-mob-xs"
                                alt={_("EMOTION.ALT1")}
                            />
                        </div>
                    </div>
                </section>

                {/* Section 3: Biorhythms Feature - Gray background, reversed layout */}
                <section className="bg-gray">
                    <div className="row">
                        {/* Right column: Biorhythms description and CTA button */}
                        <div className="col-lg-6">
                            <h2>{_("EMOTION.HEAD2")}</h2>
                            <p>{_("EMOTION.DESK2")}</p>
                            <a href={Locale.i18nLink("emotion/biorhythms")} className="ms-btn-large">
                                {_("EMOTION.BTN_BIORHYTHM")}
                            </a>
                        </div>
                        {/* Left column: Biorhythm diagram (shows first on large screens) */}
                        <div className="col-lg-6 order-lg-first">
                            <ImageI18N
                                src="/img/page/emotion/emotion-diagram.webp"
                                w={512}
                                h={367}
                                cls="mx-lg-0 ms-base-image mt-mob-s"
                                alt={_("EMOTION.ALT2")}
                            />
                        </div>
                    </div>
                    {/* Additional biorhythm info cards with different colored backgrounds */}
                    <div className="row g-4">
                        {/* Yellow background card */}
                        <TitleTextCard
                            title={_("EMOTION.LIST2.LI1_HEAD")}
                            text={_("EMOTION.LIST2.LI1_TEXT")}
                            bgColor="#FFF9E3"
                        />
                        {/* Green background card */}
                        <TitleTextCard
                            title={_("EMOTION.LIST2.LI2_HEAD")}
                            text={_("EMOTION.LIST2.LI2_TEXT")}
                            bgColor="#E8FAE0"
                        />
                        {/* Purple background card */}
                        <TitleTextCard
                            title={_("EMOTION.LIST2.LI3_HEAD")}
                            text={_("EMOTION.LIST2.LI3_TEXT")}
                            bgColor="#EDE1FF"
                        />
                    </div>
                </section>

                {/* Section 4: Stress Management Feature */}
                <section>
                    <div className="row">
                        {/* Left column: Stress management description */}
                        <div className="col-lg-6">
                            <h2>{_("EMOTION.HEAD3")}</h2>
                            <p>{_("EMOTION.DESK3_1")}</p>
                            {/* Mobile-only image (hidden on desktop) */}
                            <ImageI18N
                                src="/img/page/emotion/emotion-screen-stress-en.webp"
                                w={512}
                                h={522}
                                cls="ms-base-image d-block d-lg-none mt-mob-xs mb-mob-xs"
                                alt={_("EMOTION.ALT3")}
                            />
                            <h3>{_("EMOTION.DESK3_2")}</h3>
                            {/* Colored list items showing different emotional states */}
                            <ul className="d-flex gap-4 how-list">
                                <li className="bg-orange">{_("EMOTION.LIST3.LI1_TEXT")}</li>
                                <li className="bg-aqua">{_("EMOTION.LIST3.LI2_TEXT")}</li>
                                <li className="bg-yellow">{_("EMOTION.LIST3.LI3_TEXT")}</li>
                                <li className="bg-violet">{_("EMOTION.LIST3.LI4_TEXT")}</li>
                                <li className="bg-blue">{_("EMOTION.LIST3.LI5_TEXT")}</li>
                            </ul>
                        </div>
                        {/* Right column: Desktop-only stress management screenshot */}
                        <div className="col-lg-6">
                            <ImageI18N
                                src="/img/page/emotion/emotion-screen-stress-en.webp"
                                w={512}
                                h={443}
                                cls="ms-base-image d-none d-lg-block"
                                alt={_("EMOTION.ALT3")}
                            />
                        </div>
                    </div>
                </section>

                {/* Section 5: Personality Testing Feature - Reversed layout */}
                <section>
                    <div className="row">
                        {/* Left column: Desktop-only personality test screenshot */}
                        <div className="col-lg-6">
                            <ImageI18N
                                src="/img/page/emotion/emotion-screen-test-en.webp"
                                w={390}
                                h={512}
                                cls="ms-base-image d-none d-lg-block"
                                alt={_("EMOTION.ALT4")}
                            />
                        </div>
                        {/* Right column: Personality testing description */}
                        <div className="col-lg-6">
                            <h2>{_("EMOTION.HEAD4")}</h2>
                            <p>{_("EMOTION.DESK4_1")}</p>
                            {/* Mobile-only image (hidden on desktop) */}
                            <ImageI18N
                                src="/img/page/emotion/emotion-screen-test-en.webp"
                                w={390}
                                h={512}
                                cls="ms-base-image d-block d-lg-none mt-mob-xs mb-mob-xs"
                                alt={_("EMOTION.ALT4")}
                            />
                            <h3>{_("EMOTION.DESK4_2")}</h3>
                            {/* Bullet list of personality test benefits */}
                            <BulletList
                                items={[
                                    _("EMOTION.LIST4.LI1_TEXT"),
                                    _("EMOTION.LIST4.LI2_TEXT"),
                                    _("EMOTION.LIST4.LI3_TEXT"),
                                    _("EMOTION.LIST4.LI4_TEXT"),
                                    _("EMOTION.LIST4.LI5_TEXT"),
                                    _("EMOTION.LIST4.LI6_TEXT"),
                                ]}
                                iconColor="#7B62FE"
                                className="bullet-list"
                            />
                        </div>
                    </div>
                </section>

                {/* Section 6: App Advantages - Gray background */}
                <section className="bg-gray">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <h2>{_("EMOTION.HEAD5")}</h2>
                        </div>
                        <div className="col-12">
                            {/* Display advantages list with icons (defined at top of component) */}
                            <IconTitleTextList items={advantages} />
                        </div>
                    </div>
                </section>

                {/* Section 7: Personality Traits List - Continues gray background */}
                <section className="bg-gray bg-merge-top personality-traits-list">
                    <div className="row mb-0">
                        <div className="col-12 mb-2">
                            <h2>{_("EMOTION.HEAD6")}</h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="block bg-violet">
                                <h3>{_("EMOTION.LIST6.LI1_HEAD")}</h3>
                                <p>{_("EMOTION.LIST6.LI1_TEXT")}</p>
                                <a href={Locale.i18nLink("emotion/anxiety")} className="ms-read-more-btn-emotion">
                                    <span>{_("EMOTION.LIST6.BTN")}</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block bg-green">
                                <h3>{_("EMOTION.LIST6.LI2_HEAD")}</h3>
                                <p>{_("EMOTION.LIST6.LI2_TEXT")}</p>
                                <a href={Locale.i18nLink("emotion/productivity")} className="ms-read-more-btn-emotion">
                                    <span>{_("EMOTION.LIST6.BTN")}</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block bg-aqua">
                                <h3>{_("EMOTION.LIST6.LI3_HEAD")}</h3>
                                <p>{_("EMOTION.LIST6.LI3_TEXT")}</p>
                                <a href={Locale.i18nLink("emotion/harmony")} className="ms-read-more-btn-emotion">
                                    <span>{_("EMOTION.LIST6.BTN")}</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block bg-orange">
                                <h3>{_("EMOTION.LIST6.LI4_HEAD")}</h3>
                                <p>{_("EMOTION.LIST6.LI4_TEXT")}</p>
                                <a href={Locale.i18nLink("emotion/independence")} className="ms-read-more-btn-emotion">
                                    <span>{_("EMOTION.LIST6.BTN")}</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block bg-yellow">
                                <h3>{_("EMOTION.LIST6.LI5_HEAD")}</h3>
                                <p>{_("EMOTION.LIST6.LI5_TEXT")}</p>
                                <a href={Locale.i18nLink("emotion/energy")} className="ms-read-more-btn-emotion">
                                    <span>{_("EMOTION.LIST6.BTN")}</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block bg-blue">
                                <h3>{_("EMOTION.LIST6.LI6_HEAD")}</h3>
                                <p>{_("EMOTION.LIST6.LI6_TEXT")}</p>
                                <a href={Locale.i18nLink("emotion/openness")} className="ms-read-more-btn-emotion">
                                    <span>{_("EMOTION.LIST6.BTN")}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 8: Benefits List with Icons */}
                <section>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>{_("EMOTION.HEAD7")}</h2>
                            <p className="mb-0">{_("EMOTION.DESK7")}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {/* Extended list of benefits with custom icons */}
                            <ul className="list-with-icons extended">
                                {/* Sport/Physical activity benefit */}
                                <li>
                                    <div className="icon">
                                        <img src="/img/atom/icons/icon-sport.svg" alt="" />
                                    </div>
                                    <div>
                                        <h3>{_("EMOTION.LIST7.LI1_HEAD")}</h3>
                                        <p>{_("EMOTION.LIST7.LI1_TEXT")}</p>
                                    </div>
                                </li>
                                {/* Career/Work benefit */}
                                <li>
                                    <div className="icon">
                                        <img src="/img/atom/icons/icon-bag.svg" alt="" />
                                    </div>
                                    <div>
                                        <h3>{_("EMOTION.LIST7.LI2_HEAD")}</h3>
                                        <p>{_("EMOTION.LIST7.LI2_TEXT")}</p>
                                    </div>
                                </li>
                                {/* Health benefit */}
                                <li>
                                    <div className="icon">
                                        <img src="/img/atom/icons/icon-health.svg" alt="" />
                                    </div>
                                    <div>
                                        <h3>{_("EMOTION.LIST7.LI3_HEAD")}</h3>
                                        <p>{_("EMOTION.LIST7.LI3_TEXT")}</p>
                                    </div>
                                </li>
                                {/* Research/Learning benefit */}
                                <li>
                                    <div className="icon">
                                        <img src="/img/atom/icons/icon-research.svg" alt="" />
                                    </div>
                                    <div>
                                        <h3>{_("EMOTION.LIST7.LI4_HEAD")}</h3>
                                        <p>{_("EMOTION.LIST7.LI4_TEXT")}</p>
                                    </div>
                                </li>
                                {/* Note-taking/Planning benefit */}
                                <li>
                                    <div className="icon">
                                        <img src="/img/atom/icons/icon-note.svg" alt="" />
                                    </div>
                                    <div>
                                        <h3>{_("EMOTION.LIST7.LI5_HEAD")}</h3>
                                        <p>{_("EMOTION.LIST7.LI5_TEXT")}</p>
                                    </div>
                                </li>
                                {/* Emotional/Heart benefit */}
                                <li>
                                    <div className="icon">
                                        <img src="/img/atom/icons/icon-heart.svg" alt="" />
                                    </div>
                                    <div>
                                        <h3>{_("EMOTION.LIST7.LI6_HEAD")}</h3>
                                        <p>{_("EMOTION.LIST7.LI6_TEXT")}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Reviews Section - User testimonials and ratings */}
                <Review
                    appId={appId}
                    codes={{
                        countryCode: Locale.countryCode,
                        languageCode: Locale.language,
                    }}
                    text={{
                        head: _("REVIEW.HEAD"),
                        description: _("REVIEW.DESCRIPTION"),
                        link: _("REVIEW.LINK_ALL_REVIEWS"),
                        readMoreLink: _("REVIEW.READ_MORE_LINK"),
                        fillerCard: {
                            head: [
                                _("REVIEW.FILLER_CARD.HEAD1"),
                                _("REVIEW.FILLER_CARD.HEAD2"),
                                _("REVIEW.FILLER_CARD.HEAD3"),
                            ],
                            link: _("REVIEW.FILLER_CARD.LINK"),
                        },
                    }}
                    themeColor="#7B62FE"
                    hasUnderlineHover={false}
                />

                {/* Final Call-to-Action Section - App download promotion */}
                <section>
                    <CallToAction
                        title="EMOTION.HEAD8"
                        subtitle="EMOTION.DESK8"
                        appId={appId}
                        appDownloadTitle={_("EMOTION.DWN")}
                        imgSrc="/img/page/emotion/img-cta-en.webp"
                        imgAlt={_("EMOTION.ALT4")}
                    />
                </section>
            </div>

            {/* Page Footer - site-wide footer component */}
            <Footer />
            
            {/* Floating scroll-to-top button with emotion theme color */}
            <ScrollButton color="#7B62FE" />
        </>
    );
}
