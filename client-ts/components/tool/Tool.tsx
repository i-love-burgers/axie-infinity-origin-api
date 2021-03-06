import { Tool as ToolType } from "@/types/typescript-axios";
import React from "react";
import classes from "./Tool.module.scss";

function Tool(props: { tool: ToolType }) {
  const { tool } = props;

  return (
    <div className={classes.tool}>
      <div className={classes.toolSubElement}>
        <div className={classes.toolSubSubElement}>
          <div className={classes.toolBackground}>
            <img
              src={`/images/templates/tool/backgrounds/tool.jpg`}
              alt="Tool Card - Background"
            />
          </div>
          <div className={classes.toolArt}>
            <img
              src={`/images/templates/tool/arts/${tool.id}.jpg`}
              alt="Tool Card - Art"
            />
          </div>
          <div className={classes.toolGradient}>
            <img
              src="/images/templates/tool/gradients/tool.png"
              alt="Tool Card - Gradient"
            />
          </div>
          <div className={classes.toolFrame}></div>
          {tool.effect && (
            <div className={classes.toolValue}>
              <img
                src={`/images/templates/card/stats/${tool.effect}.png`}
                alt="Tool Card - Value Effect"
              />
              <span>{tool.value}</span>
            </div>
          )}
          <div className={classes.toolEnergyCost}>
            <div className={classes.toolEnergyCostFrame}>
              <img
                src="/images/templates/tool/frame/frame-energy.png"
                alt="Tool Card - Energy Cost - Frame"
              />
            </div>
            <div className={classes.toolEnergyCostIcon}>
              <img
                src="/images/templates/tool/frame/energy-icon.png"
                alt="Tool Card - Energy Cost - Icon"
              />
            </div>
            <span className={classes.toolEnergyCostValue}>
              {tool.energyCost}
            </span>
          </div>
          <span className={classes.toolName}>{tool.name}</span>
          <div className={classes.toolTags}>
            {tool.abilities &&
              tool.abilities.map((ability) => {
                const abilityImgSrc = `/images/templates/tool/tags/${ability}.png`;
                return (
                  <img
                    key={`${tool.id}_${ability}`}
                    src={abilityImgSrc}
                    alt="Tool Card - Tag"
                  />
                );
              })}
          </div>
          <span className={classes.toolDescription}>{tool.description}</span>
        </div>
      </div>
    </div>
  );
}

export default Tool;
