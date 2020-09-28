import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { parseISO } from 'date-fns';

import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import CreateAppointmentService from 'modules/appointments/services/CreateAppointmentService';

export default class AppointmentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { provider_id, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      date: parsedDate,
      provider_id,
    });

    return response.json(appointment);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const appointmentsRepository = container.resolve(AppointmentsRepository);

    const appointments = await appointmentsRepository.findByDate(new Date());

    return response.json(appointments);
  }
}
