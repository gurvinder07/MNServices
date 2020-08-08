export default class Reference {

    constructor( company = '', phone='', address='', supervisor='', jobtitle ='' ,startingsalary='',endingsalary='',responsibilities='',from='', to='',reasonleaving='')
    {
        this.company = company;
        this.phone = phone;
        this.address = address;
        this.supervisor = supervisor;
        this.jobtitle = jobtitle;
        this.startingsalary = startingsalary;
        this.endingsalary = endingsalary;
        this.responsibilities = responsibilities;
        this.from = from;
        this.to = to;
        this.reasonleaving = reasonleaving;
    }

}
