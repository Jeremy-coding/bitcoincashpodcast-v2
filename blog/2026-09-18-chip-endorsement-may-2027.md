---
slug: chip-endorsement-may-2027
title: CHIP Endorsement May 2027
author: Jeremy
author_title: Bitcoin Cash Podcast founder
author_image_url: /img/bch.png
tags: [CHIPs, BCH]
---

import feliciaUrl from "@site/static/img/blog/Felicia.png";

import consensusCashUrl from "@site/static/img/blog/ConsensusPolling.jpg";

import exchangeConcernsFeliciaUrl from "@site/static/img/blog/exchangeConcernsFelicia.jpg";

# 1 Minute Blocks ("Felicia") Endorsement

<img src={feliciaUrl} alt="Felicia image" />
_Felicia, author's impression._
<hr />

We're coming to the end of September & things are getting serious for BCH lock-in. So let's get serious. I'm endorsing Fablous CHIP-2025-03 Faster Blocks for Bitcoin Cash ("Felicia") on behalf of myself, The BCH Podcast, [The BCH Bullet](https://thebchbullet.substack.com/) & [BCH BLAZE](https://x.com/bchblaze). I also have spoken to the other decision makers in [BLISS](https://bliss.cash/) & [Selene Wallet](https://selene.cash/), which are also set to make a positive endorsement, but those statements will come separately.

- ✅ [CHIP-2025-03 Faster Blocks for Bitcoin Cash](https://gitlab.com/0353F40E/fablous)
Github commit hash: 7b343d1963360e9d4ea4d3a7a41a7486d1c12c22

Cognisant of my role in the community, and the important function of facilitating community conversation which acknowledges and represents a broad spread of opinions as much as possible, I have been open about my point of view while filling my statements with caveats & acknowledgement of tradeoffs to be mindful of others who weren't yet in agreement. But lock-in is under 2 months away and the time for sensitive debating is over.

We've got to get this done. I understand that node implementation is mostly done, rather than fully done, and that many pieces of the industry (such as miners and exchanges) need to be contacted. Well let's do that work and make it happen. A strong community endorsement signal spreading will motivate that to be done as it has with all CHIP upgrades. Hesitating on endorsements empties the urgency to do implementation & outreach in a negative feedback loop. Being proactive spins the wheel the other way. And from the [BLISS polling](https://x.com/bchbliss/status/2055325601574101495), Podcast interviews, community chatter & [Consensus.cash sentiment](https://www.consensus.cash/fablous), it seems clear to me that actually we already have overwhelming support for the upgrade among active community members.

<img src={consensusCashUrl} alt="Consensus Cash" />

_Twitter polls don't make consensus, but a statistically relevant sample size signal is signal._

## Benefits

The benefits of the upgrade stand for themselves. Nobody, not even the most opposed block time reduction critic, celebrates when their block takes an hour to arrive. Nobody prays for their confirmation to be slow when they hit the "Send" button. Nobody. Whether it's payments usage or DeFi usage, faster is better. Confirmations add security (both financial & psychological), and increasing the gradations available for users to choose from is only upside from a UX perspective. 1-conf is a critical threshold, and getting to that as fast as safely possible matters for all kinds of use cases. In this respect, the upgrade is a no-brainer.

The CHIP has much more detail for anybody who needs the full list & evidence.

## Necessity & downsides

Some lucky few users do not feel the pain point of slower blocks. I envy them, to be so liberated living fully in a circular 0-conf economy or so disconnected from the reality of regularly transacting with BCH. But they are not harmed by an increase in block frequency - they can simply wait as they prefer for 10x 1 min confirmations instead of 1x 1- confirmation. They are not inconvenienced in the slightest.

But the fact is, those people are a tiny minority. Not only is much of the current community suffering the issue of slow blocks - so will a large portion of the people we hope to onboard. But we won't onboard them or will rapidly lose their interest if we offer a product that is unpredictably frustrating in a way that none of our direct competitors are. We can't live in a utopian expectation that everyone will use the latest BCH 0-conf supporting wallets. They won't. A lot of people are going to use outdated weird multicoin wallets, transact with all kinds of confirmation requirements, move money to/from custodial exchanges & demand confirmations no matter the education or UX offered with 0-conf. That's just the pragmatic reality.  Even worse, those users won't pop up on Twitter threads or Telegram groups to complain and make visible how critical this issue is - they'll just pick another coin. Confirmations are industry standard, everyone understands how they work, and faster is better. It's that simple.

Yes, everything has tradeoffs. There is some slightly increased orphan risk, slightly increased header cost, and we can't 100% guarantee anything about miner behaviour after the change (even if realistically it'll be totally fine).  But PoW mining attacks are fairly rare, and very very recoverable. And in some kind of absolute disaster scenario, we can always scale back the block time next year (or even sooner, if absolutely required) with the ticks system that is part of the upgrade. Plus this is forward-compatible, in the case that a further reduction becomes viable in a few years.

## Risk of inaction

The greatest risk to BCH is that we do nothing. Attention & mindshare are our fundamental constraint, and if 1 minute blocks waits through another year of discussion & debate to reassure the uncertain or ambivalent minority, that will crowd out the NEXT batch of ideas from getting full attention - whether that be [EC Maths](https://bitcoincashresearch.org/t/chip-2025-05-native-elliptic-curve-arithmetic-operations/1570?u=bitcoincashpodcast), [Sunlight](https://bitcoincashresearch.org/t/sunlight-consensus-with-the-lights-on-and-its-natural-pairing-with-1-minute-blocks/2055?u=bitcoincashpodcast), or anything else. Bikeshedding about small risks for the next 18 months will not only guarantee no BCH upgrade goes live from now until **May 2028 (!!!)**, it'll sink the chances of that upgrade being impressive too with 1-minute blocks dominating the conversation as a "big" upgrade in the meantime. Cryptocurrency is moving faster than ever, and [we will not be credible or competitive as a market leader](https://youtu.be/KZ8K4I-MfzA?t=4039) if we can't get obvious upgrades delivered in a timely & efficient fashion. Will BCH survive if 1 min blocks don't lock in? Yes. Will we thrive? Greatly reduced chances.

There are no prominent coins EVER that have raised the block time above 10 minutes. Maybe no examples period. In fact, the industry standard clusters around 1 second to 1 minute now, it doesn't even form an even spread through to 10 minutes. The market signal could not possibly be any clearer. 1 minute blocks doesn't even put us in the lead of the industry, the path we're on is very very well-trodden. But sometimes addressing a glaring weakness to "good enough" is worth more to a project than constantly chasing the forefront of new features. Our industry reputation can only improve as we show continual willingness to make well-research & co-ordinated improvements.

## Hesitation is natural, but not optimal

Each of the last 4 BCH upgrades, all widely appreciated in hindsight, had some kind of lingering doubts around them at a community level as lock-in approached. From my perspective, this kind of "upgrade hesitancy" is inevitable in a community of any sufficient size, and we must resist the inclination to be conservative in a world that is changing so fast.

- 2023: CashTokens - "Shouldn't BCH just be cash?"
- 2024: Jessica - "Is the algo perfect? What if it isn't fast ENOUGH?"
- 2025: Velma - "Should we include Big Big Ints?"
- 2026: Layla "Should we do OP_Eval? Is Functions quite ready & perfected?"
- 2027: Felicia: "0-conf seems fine for me, I don't think 1 minute blocks is urgent. Maybe another year to review the numbers?"

In each of the previous 4 cases, the more "aggressive" option was eventually implemented, and in every case I have not seen anyone regret that in hindsight. To me, that is signal that doubts derive more from human psychology than lack of engineering preparation.

## Conclusion

So let's play to win & not to not lose. When we're #1, we can think about slowing down. But until then, we simply cannot afford to be offering a sub-standard cryptocurrency or monetary experience in a competitive market. Inaction & hesitation has killed more projects than upgrades, and always will. Time waits for no-one.

I look forward to seeing many more positive endorsements in the coming weeks. And for those who submit a neutral or even negative statement, I'm glad to see you participating in the process & everyone is entitled to their opinion. But for BCH, we simply have to get this over the line. I expect by May 15 next year everyone will be accustomed to & enthusiastic about the Felicia upgrade as we discuss the next steps on our path to global reserve currency.

1 minute blocks or bust.

_Jeremy_

Final note: Please refer to the following image before replying "But exchanges will just 10x confirmations!" - which is for some reason unknown to me the most persistent & parroted rebuttal no matter how many times it is addressed. Thank you.

<img src={exchangeConcernsFeliciaUrl} alt="exchange concerns" />
<hr />




<!-- truncate -->

## Further reading:

[FAQ on Bitcoin Cash governance](/faqs/Decentralisation/how-does-BCH-governance-work)
