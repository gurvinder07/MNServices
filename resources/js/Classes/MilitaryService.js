export default class MilitaryService {

    constructor( branch = '',rank='',from='',to='',typeofdischarge='',otherthanhonorable='')
    {
        this.branch = branch;
        this.rank = rank;
        this.from = from;
        this.to = to;
        this.typeofdischarge = typeofdischarge;
        this.otherthanhonorable = otherthanhonorable
    }
}
