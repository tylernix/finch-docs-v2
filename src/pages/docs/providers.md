---
title: List of providers
description: List of supported Automated and Assisted providers.
---

The table below displays the providers with their associated provider `id` that can be used in the `payroll_provider` parameter for [Finch Connect](/docs/integrations-overview).

## HRIS + Payroll

**Read-Only** - The `Company`, `Directory`, `Individual`, `Employment`, `Payment` and `Pay Statement` endpoint are read-only endpoints. Providers can be either an [Automated API Provider](/docs/automated-flow) or an [Assisted API Provider](/docs/assisted-flow).

**Benefits** - The benefits endpoints contain both read and write functionalities. Providers can be either an Automated API Benefit Provider or an Assisted API Benefit Provider. Only `Create Benefit`, `Update Benefit`, `Enroll Individuals in Benefits` and `Unenroll Individuals from Benefits` endpoints are available for Assisted API Benefit Providers.

### Automated API Providers

Display Name | Id | Read | Benefits
---------|----------|----------|----------
ADP Workforce Now | `adp_workforce_now` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
BambooHR | `bamboo_hr` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
bob | `bob` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Gusto | `gusto` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Automated" color="darkgreen" /%}
Humaans | `humaans` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Insperity | `insperity` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Justworks | `justworks` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Namely | `namely` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Paychex Flex | `paychex_flex` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Paycom | `paycom` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Paylocity | `paylocity` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Personio | `personio` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
QuickBooks Payroll | `quickbooks` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Rippling | `rippling` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Run Powered by ADP | `adp_run` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Sage HR | `sage_hr` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Sapling | `sapling` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Sequoia One | `sequoia_one` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Square Payroll | `square_payroll` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
TriNet | `trinet` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
UltiPro (UKG Pro) | `ulti_pro` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Wave | `wave` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Workday | `workday` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Zenefits | `zenefits` | {% color-text text="Automated" color="darkgreen" /%} | {% color-text text="Assisted" color="goldenrod" /%}

### Assisted API Providers

Display Name | Id | Read | Benefits
---------|----------|----------|----------
AAP iSolved | `aap_isolved` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Abacus HCM iSolved | `abacus_isolved` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Absolute Payroll iSolved | `absolute_isolved` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Accupay iSolved | `accupay_isolved` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Ace Workforce Technologies isolved | `ace_isolved` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
AccountantsWorld | `accountantsworld` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Adams Keegan | `adams_keegan` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
ADP Comprehensive Services | `adp_comprehensive` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
ADP TotalSource | `adp_totalsource` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Advantage Payroll Services | `advantage_payroll_services` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Affiliated HR Payroll Services iSolved | `affiliated_hr_payroll_services_isolved` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Affiliated HR Payroll Services Evolution | `affiliated_hr_payroll_services_evolution` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Ahola | `ahola` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
AlphaStaff | `alphastaff` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Amplify HR | `amplify_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
APS Payroll | `aps_payroll` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Asset HR | `asset_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Asure Software | `asure_software` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Balance Point | `balance_point` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Baron Payroll iSolved | `baron_isolved` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
BASIC | `basic` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
BBCS Payroll | `bbcs` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
BBSI | `bbsi` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
BCN Services | `bcn_services` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Bene-Care | `benecare` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Big Fish Employer Services | `big_fish_employer_services` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Bizchecks Payroll | `bizchecks_payroll` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Business Online Payroll | `business_online_payroll` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Ceridian Dayforce* | `ceridian_dayforce` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Ceridian Powerpay | `ceridian_powerpay` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Cezanne HR | `cezannehr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
CharlieHR | `charlie_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
ClickUp | `clickup` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
CoAdvantage* | `coadvantage` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Coastal Payroll | `coastal_payroll` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
CognosHR | `cognos_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Collage | `collage` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Commonwealth Payroll & HR | `commonwealth_payroll_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
ConnectPay | `connectpay` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
CPM Employer Services iSolved | `cpm_isolved` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Crescent Payroll Solutions | `crescent_payroll_solutions` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Decent | `decent` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Deel* | `deel` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Deltek | `deltek` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Deluxe | `deluxe` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
DM Payroll Solutions | `dm_payroll_solutions` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Dominion Payroll | `dominion_payroll` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Doyle | `doyle_hcm` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Eddy | `eddyhr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Emplicity | `emplicity` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Employdrive | `employdrive` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
EmPower HR | `empower_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Engage PEO | `engage_peo` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Employer Flexible | `employer_flexible` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Employer Services Corporation (ESC) | `esc` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Everee | `everee` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Evolution Payroll Services | `evolution_payroll_services` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Excel Resources | `excel_resources` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Flock | `flock` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Freshteam | `freshteam` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
FullStack PEO | `fullstack_peo` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
G&A Partners | `gna_partners` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Gig Wage | `gigwage` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Goco | `goco` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
greytHR | `greyt_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
GTM Payroll Services Evolution | `gtm_payroll_services_evolution` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
GTM Payroll Services iSolved | `gtm_payroll_services_isolved` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Heartland | `heartland` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Highflyer HR | `highflyer_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Horizons | `horizons` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
HRO | `hro` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
HROne | `hrone` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Hubstaff | `hubstaff` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Humi | `humi` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
INFINITI HR | `infiniti_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Infor | `infor` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Iris HR | `iris_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
iSolved* | `isolved` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Kenjo | `kenjo` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Keystone Payroll iSolved | `keystone_isolved` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
mp | `mp` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
MPAY | `mpay` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Multiplier | `multiplier` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Netchex | `netchex` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
NaturalHR | `natural_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Newtek | `newtek` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Nextep | `nextep` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Oasis | `oasis` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
odoo | `odoo` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
OneSource Payroll | `onesource_payroll` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
OnPay* | `onpay` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Opolis | `opolis` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Oracle Fusion | `oracle_fusion` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Oracle PeopleSoft | `oracle_peoplesoft` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Panther | `panther` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Paragon Payroll iSolved | `paragon_payroll_isolved` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Patriot | `patriot` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Paycor* | `paycor` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Payday Workforce Solutions | `payday_workforce_solutions` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
PayFit | `payfit` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
PayNorthwest | `paynw` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
PayPro HCS isolved | `paypro_hcs_isolved` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Payroll Network | `payroll_network` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Payroll Office of America | `payroll_office_of_america` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Payroll Plus HCM isolved | `payroll_plus_hcm_isolved` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Payroll Plus HCM Evolution | `payroll_plus_hcm_evolution` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Payroll Solutions | `payroll_solutions` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Paytime* | `paytime` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
PayUSA | `pay_usa_inc` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
PCS HCM | `pcs_hcm` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
PeopleForce | `peopleforce` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
PeopleHum | `peoplehum` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
People Lease | `people_lease` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Platinum Group | `platinum_group` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
PrestigePEO | `prestige_peo` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
PrimePay | `primepay` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
PrismHR | `prism_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Proliant | `proliant` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
PropelHR | `propel_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
ProSoftware | `prosoftware` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Proxus HR isolved | `proxus_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Remote | `remote` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Resourcing Edge | `resourcing_edge` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
RMI PEO | `rmi_peo` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Sage Payroll | `sage_payroll` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
SAP SuccessFactors | `successfactors` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Savant HCM Evolution | `savant_hcm_evolution` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Sheakley | `sheakley` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Simploy | `simploy` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Skuad | `skuad` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Solution Services | `solution_services` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Southeast Personnel Leasing | `southeastpersonnel` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
SourceOne | `sourceone` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Strategic Payroll Solutions isolved | `strategic_payroll_solutions_isolved` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
SuitePeople (Oracle NetSuite) | `suite_people` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
SurePayroll | `surepayroll` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
SyncHR | `sync_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Teamworks Group | `teamworks` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
The Payroll Company | `the_payroll_company` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Thread HCM | `thread_hcm` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Toast Payroll* | `toast_payroll` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Trakstar | `trakstar` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
UKG Ready (Kronos) | `ukg_ready` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Uzio | `uzio` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Velocity Global | `velocity_global` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
VensureHR* | `vensure_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Vfficient | `vfficient` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Viewpoint HR Management Spectrum | `viewpoint_hr_management_spectrum` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Viewpoint HR Management Vista | `viewpoint_hr_management_vista` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Wagepoint | `wagepoint` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
WebHR | `web_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
whirks | `whirks` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Workforce Junction | `workforce_junction` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Worklio | `worklio` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Workzoom | `workzoom` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
wurk | `wurk` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Xenium HR | `xenium_hr` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Xero | `xero` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}
Zoho Payroll | `zoho_payroll` | {% color-text text="Assisted" color="goldenrod" /%} | {% color-text text="Assisted" color="goldenrod" /%}

\**these assisted providers are **Pay Enabled**, meaning initial connection time is 14 days instead of 6 weeks*

## Applicant Tracking Systems (ATS)

To enable access to the ATS API, please reach out to [developers@tryfinch.com](mailto:developers@tryfinch.com).

### ATS API Providers

Display Name | Id | Read
---------|----------|-----
Lever (beta) | `lever`| {% color-text text="Automated" color="darkgreen" /%}

> Assisted Connections are not currently available for ATS integrations.
