import React from "react";
import _ from "@/i18n/locale";
import type { Story, StoryDefault } from "@ladle/react";
import PillText from "@/atomic/atom/pill-text";

const CenterDecorator = (Component: React.FC) => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}
    >
        <Component />
    </div>
);

export default {
    title: "Atom/PillText",
} satisfies StoryDefault;

export const open: Story = () => (
    <PillText text={_("VACANCY.VACANCY_STATUS.OPEN")} backgroundColor="#E5F4D9" textColor="#219B3F" />
);

export const closed: Story = () => (
    <PillText text={_("VACANCY.VACANCY_STATUS.CLOSED")} backgroundColor="#FFF3E9" textColor="#FD7E14" />
);

open.decorators = [CenterDecorator];
closed.decorators = [CenterDecorator];
