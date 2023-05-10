import React from 'react'
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function socialFactions() {
  return (
    <div>
      <div className="socialFactions">
          <a
            href="https://discord.gg/meta-life-889533275545149440"
            className="socialLinkFactions socialDiscord"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span>
              Joins us on <strong>Discord</strong>
            </span>
            <FontAwesomeIcon className="socialDiscordIcone" icon={faDiscord} />
          </a>
          <a
            href="https://twitter.com/metalegendsnft"
            className="socialLinkFactions socialTwitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span>
              Joins us on <strong>Twitter</strong>
            </span>
            <FontAwesomeIcon className="socialTwitterIcone" icon={faTwitter} />
          </a>
        </div>
    </div>
  )
}
