import { useState } from "react";

type TabConfigEntry = {
    header: string;
    component: React.ReactNode;
};
type TabsProps = {
    config: TabConfigEntry[];
};

const Tabs: React.FC<TabsProps> = ({ config }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div>
            <div className="flex justify-between p-4">
                <div className="flex justify-start space-x-8">
                {
                    config.map((entry, index) => (
                        <div className={`tab-header ${activeTab === index ? "active" : ""}`} onClick={() => setActiveTab(index)} key={index}>
                            {entry.header}
                        </div>
                    ))
                }
                </div>
                <div>Published July 01, 2024</div>
            </div>

            <div>
            {config[activeTab].component}
            </div>
        </div>
    );
}
export default Tabs;